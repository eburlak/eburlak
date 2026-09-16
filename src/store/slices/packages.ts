'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '@/store/request';

const REGISTRY_URL = 'https://registry.npmjs.org';
const DOWNLOADS_URL = 'https://api.npmjs.org/downloads/point/last-week';

/** Abbreviated packument: same fields, a fraction of the payload. */
const REGISTRY_ACCEPT = 'application/vnd.npm.install-v1+json';

/** Keeps the skeletons on screen long enough to be read as a state, not a flash. */
const MINIMUM_LOADING_MS = 450;

export type TSnapshot = {
  status: 'loading' | 'live' | 'offline';
  version: string | null;
  weeklyDownloads: number | null;
  updatedAt: string | null;
};

type TPackument = {
  'dist-tags'?: { latest?: string };
  /** Last change to the package as a whole - the abbreviated document carries no per-version times. */
  modified?: string;
};

type TDownloads = { downloads?: number };

type TState = {
  snapshots: Record<string, TSnapshot>;
};

const loadingSnapshot: TSnapshot = {
  status: 'loading',
  version: null,
  weeklyDownloads: null,
  updatedAt: null,
};

const offlineSnapshot: TSnapshot = { ...loadingSnapshot, status: 'offline' };

const getSnapshotsFor = (packageNames: string[], snapshot: TSnapshot) =>
  Object.fromEntries(
    packageNames.map((packageName) => [packageName, snapshot]),
  );

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getSnapshot = async (packageName: string): Promise<TSnapshot> => {
  const encodedName = encodeURIComponent(packageName);

  const [packument, downloads] = await Promise.all([
    request<TPackument>({
      baseUrl: REGISTRY_URL,
      url: `/${encodedName}`,
      additionalHeaders: { Accept: REGISTRY_ACCEPT },
    }),
    request<TDownloads>({
      baseUrl: DOWNLOADS_URL,
      url: `/${encodedName}`,
    }).catch(() => null),
  ]);

  return {
    status: 'live',
    version: packument['dist-tags']?.latest ?? null,
    weeklyDownloads: downloads?.downloads ?? null,
    updatedAt: packument.modified ?? null,
  };
};

export const getSnapshots = createAsyncThunk<
  Record<string, TSnapshot>,
  string[]
>('packages/getSnapshots', async (packageNames) => {
  const [results] = await Promise.all([
    Promise.all(
      packageNames.map((packageName) =>
        getSnapshot(packageName).catch(() => offlineSnapshot),
      ),
    ),
    wait(MINIMUM_LOADING_MS),
  ]);

  return Object.fromEntries(
    packageNames.map((packageName, index) => [packageName, results[index]]),
  );
});

const initialState: TState = {
  snapshots: {},
};

export const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSnapshots.pending, (state, action) => {
        state.snapshots = {
          ...state.snapshots,
          ...getSnapshotsFor(action.meta.arg, loadingSnapshot),
        };
      })
      .addCase(getSnapshots.fulfilled, (state, action) => {
        state.snapshots = { ...state.snapshots, ...action.payload };
      })
      .addCase(getSnapshots.rejected, (state, action) => {
        state.snapshots = {
          ...state.snapshots,
          ...getSnapshotsFor(action.meta.arg, offlineSnapshot),
        };
      });
  },
});

export default packagesSlice.reducer;
