"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const REGISTRY_URL = "https://registry.npmjs.org";
const DOWNLOADS_URL = "https://api.npmjs.org/downloads/point/last-week";

/** Abbreviated packument: same fields, a fraction of the payload. */
const REGISTRY_ACCEPT = "application/vnd.npm.install-v1+json";

/** Keeps the skeletons on screen long enough to be read as a state, not a flash. */
const MINIMUM_LOADING_MS = 450;

export type PackageSnapshot = {
  status: "loading" | "live" | "offline";
  version: string | null;
  weeklyDownloads: number | null;
  updatedAt: string | null;
};

const loadingSnapshot: PackageSnapshot = {
  status: "loading",
  version: null,
  weeklyDownloads: null,
  updatedAt: null,
};

const offlineSnapshot: PackageSnapshot = { ...loadingSnapshot, status: "offline" };

type Packument = {
  "dist-tags"?: { latest?: string };
  /** Last change to the package as a whole - the abbreviated document carries no per-version times. */
  modified?: string;
};

type DownloadsPoint = { downloads?: number };

async function fetchJson<T>(url: string, signal: AbortSignal, accept?: string) {
  const response = await fetch(url, {
    signal,
    headers: accept ? { Accept: accept } : undefined,
  });

  if (!response.ok) throw new Error(`${url} responded with ${response.status}`);

  return (await response.json()) as T;
}

async function fetchSnapshot(packageName: string, signal: AbortSignal): Promise<PackageSnapshot> {
  const encodedName = encodeURIComponent(packageName);

  const [packument, downloads] = await Promise.all([
    fetchJson<Packument>(`${REGISTRY_URL}/${encodedName}`, signal, REGISTRY_ACCEPT),
    fetchJson<DownloadsPoint>(`${DOWNLOADS_URL}/${encodedName}`, signal).catch(() => null),
  ]);

  return {
    status: "live",
    version: packument["dist-tags"]?.latest ?? null,
    weeklyDownloads: downloads?.downloads ?? null,
    updatedAt: packument.modified ?? null,
  };
}

function getSnapshotsFor(packageNames: string[], snapshot: PackageSnapshot) {
  return Object.fromEntries(packageNames.map((packageName) => [packageName, snapshot]));
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Pulls live version and download numbers for the given packages straight from npm. */
export function useNpmRegistry(packageNames: string[]) {
  const packageKey = packageNames.join(",");
  const requestedNames = useMemo(() => packageKey.split(","), [packageKey]);

  const [attempt, setAttempt] = useState(0);
  const [snapshots, setSnapshots] = useState(() =>
    getSnapshotsFor(requestedNames, loadingSnapshot)
  );

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      const [results] = await Promise.all([
        Promise.all(
          requestedNames.map((packageName) =>
            fetchSnapshot(packageName, controller.signal).catch(() => offlineSnapshot)
          )
        ),
        wait(MINIMUM_LOADING_MS),
      ]);

      if (controller.signal.aborted) return;

      setSnapshots(
        Object.fromEntries(requestedNames.map((packageName, index) => [packageName, results[index]]))
      );
    };

    void load();

    return () => controller.abort();
  }, [requestedNames, attempt]);

  const refetch = useCallback(() => {
    setSnapshots(getSnapshotsFor(requestedNames, loadingSnapshot));
    setAttempt((current) => current + 1);
  }, [requestedNames]);

  const getIsLoading = () =>
    requestedNames.some((packageName) => snapshots[packageName]?.status === "loading");

  return { snapshots, isLoading: getIsLoading(), refetch } as const;
}
