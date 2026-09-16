import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { profile } from '@/data/profile';
import * as i18nConstant from '@/i18n/constant';
import { getMessages } from '@/i18n/messages';
import * as themeConstant from '@/styles/constant';
import { themes } from '@/styles/theme';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const photo = await readFile(join(process.cwd(), 'public', profile.avatar));
const photoSource = `data:image/jpeg;base64,${photo.toString('base64')}`;

const { profile: messages } = await getMessages(i18nConstant.fallback);
const { colors } = themes[themeConstant.fallback as keyof typeof themes];

const photoWidth = 520;

export const alt = `${messages.name} - ${profile.jobTitle}`;

const Image = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: colors.background,
          color: colors.foreground,
        }}
      >
        <img
          src={photoSource}
          width={photoWidth}
          height={size.height}
          style={{ objectFit: 'cover' }}
          alt=""
        />
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 20,
            padding: 64,
          }}
        >
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>
            {messages.name}
          </div>
          <div style={{ fontSize: 36, color: colors.mutedForeground }}>
            {profile.jobTitle}
          </div>
          <div
            style={{
              marginTop: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontSize: 30,
              color: colors.mutedForeground,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: colors.online,
              }}
            />
            {profile.company}
          </div>
        </div>
      </div>
    ),
    size,
  );

export default Image;
