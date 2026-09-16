import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { profile } from '@/data/profile';
import { themes } from '@/styles/theme';
import * as themeConstant from '@/styles/constant';

export const alt = `${profile.name} - ${profile.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const avatar = await readFile(join(process.cwd(), 'public', profile.avatar));
const avatarSource = `data:image/jpeg;base64,${avatar.toString('base64')}`;

const { colors } = themes[themeConstant.fallback as keyof typeof themes];

const Image = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 40,
          padding: 80,
          background: colors.background,
          color: colors.foreground,
        }}
      >
        <img
          src={avatarSource}
          width={200}
          height={200}
          style={{ borderRadius: '50%', border: `4px solid ${colors.edge}` }}
          alt=""
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 40, color: colors.mutedForeground }}>
            {`${profile.jobTitle} at ${profile.company}`}
          </div>
        </div>
      </div>
    ),
    size,
  );

export default Image;
