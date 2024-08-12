import * as React from 'react'

import { IconSvgProps } from '@/types'

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 181.000000 256.000000"
    width={size || width}
    {...props}
  >
    <g
      fill="#000000"
      stroke="none"
      transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
    >
      <path
        d="M377 2365 c-52 -18 -83 -49 -117 -116 -45 -89 -62 -192 -58 -355 l3
-142 -58 -61 c-148 -155 -185 -387 -92 -574 l34 -69 -20 -44 c-34 -82 -50
-164 -50 -263 0 -108 18 -190 58 -262 l26 -48 -21 -49 c-12 -27 -26 -71 -32
-98 -14 -62 -15 -221 -1 -257 10 -26 14 -27 76 -27 73 0 70 -4 53 86 -15 82 2
188 42 266 37 70 38 104 5 148 -47 64 -68 136 -69 240 -1 103 14 160 66 261
31 61 29 87 -10 122 -11 10 -31 42 -43 70 -19 42 -24 69 -23 142 0 114 25 183
95 260 70 76 142 110 239 112 41 0 78 2 82 2 4 1 17 22 29 47 30 59 96 119
167 152 49 23 70 27 147 27 79 0 97 -4 149 -29 68 -33 133 -94 159 -148 10
-20 23 -41 30 -45 6 -4 46 -8 87 -8 67 -1 83 -5 140 -36 123 -68 193 -187 193
-334 1 -67 -4 -90 -27 -142 -16 -35 -35 -68 -43 -75 -34 -28 -35 -58 -5 -117
52 -101 67 -158 66 -261 -1 -104 -22 -176 -69 -240 -33 -44 -32 -78 5 -148 40
-78 57 -184 42 -266 -17 -90 -20 -86 53 -86 62 0 66 1 76 27 14 36 13 195 -1
257 -6 27 -20 71 -32 98 l-21 49 26 48 c76 139 79 359 6 528 l-20 47 25 46
c99 183 64 439 -81 591 l-58 61 3 142 c4 164 -13 266 -58 357 -64 126 -172
159 -263 79 -54 -47 -92 -138 -123 -298 -3 -14 -10 -22 -17 -18 -182 80 -297
85 -443 21 l-54 -24 -4 22 c-36 185 -85 285 -156 322 -43 21 -74 24 -113 10z
m77 -168 c42 -71 81 -301 57 -336 -5 -8 -31 -16 -58 -18 -26 -2 -62 -8 -80
-13 l-31 -8 -7 49 c-8 59 2 172 22 248 14 57 48 121 63 121 5 0 20 -19 34 -43z
m965 10 c40 -65 69 -239 56 -336 l-7 -49 -31 8 c-18 5 -54 11 -80 13 -27 2
-53 10 -58 18 -12 17 -3 141 17 229 15 64 57 150 74 150 4 0 18 -15 29 -33z"
      />
      <path
        d="M778 1361 c-73 -24 -116 -51 -165 -104 -55 -60 -76 -120 -71 -201 5
-76 35 -129 106 -183 62 -47 127 -63 257 -63 172 0 258 36 329 138 42 59 48
155 16 230 -29 68 -111 143 -188 173 -80 31 -207 36 -284 10z m257 -100 c161
-71 194 -232 66 -318 -49 -33 -94 -43 -196 -43 -102 0 -147 10 -196 43 -178
120 -32 356 211 343 39 -2 86 -12 115 -25z"
      />
      <path
        d="M838 1159 c-25 -14 -22 -44 7 -67 20 -16 24 -26 19 -49 -7 -36 15
-58 51 -49 21 5 25 12 25 46 0 29 5 42 20 50 27 15 27 66 0 75 -10 3 -28 1
-40 -5 -14 -7 -26 -8 -39 0 -23 12 -22 12 -43 -1z"
      />
      <path
        d="M397 1348 c-9 -7 -23 -30 -32 -50 -21 -53 -1 -103 47 -116 43 -11 60
-6 92 27 40 41 43 81 11 119 -21 25 -34 32 -64 32 -20 0 -45 -6 -54 -12z"
      />
      <path
        d="M1295 1328 c-32 -38 -29 -78 11 -119 32 -33 49 -38 92 -27 49 13 68
62 46 118 -19 47 -38 60 -87 60 -27 0 -41 -7 -62 -32z"
      />
    </g>
  </svg>
)

export const Order: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 512.000000 512.000000"
    width={size || width}
    {...props}
  >
    <g
      fill="#000000"
      stroke="none"
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    >
      <path
        d="M672 4513 c-49 -24 -75 -68 -80 -132 -5 -83 14 -105 182 -217 117
-78 147 -103 155 -128 5 -17 107 -461 226 -986 119 -525 225 -979 236 -1009
47 -136 162 -263 294 -326 137 -66 137 -66 1132 -62 796 3 894 5 943 20 164
50 297 161 368 308 38 77 57 154 222 880 195 862 198 884 165 1014 -55 211
-237 387 -444 431 -54 11 -228 14 -941 14 l-875 0 -39 -23 c-109 -61 -106
-221 5 -277 37 -19 62 -20 902 -20 949 0 913 2 990 -61 56 -46 89 -109 94
-182 4 -54 -18 -162 -167 -812 -94 -412 -177 -770 -185 -795 -21 -65 -66 -114
-133 -147 l-57 -28 -895 0 c-836 0 -897 1 -933 18 -56 26 -110 80 -135 134
-12 26 -121 487 -242 1023 -121 536 -227 994 -236 1018 -31 84 -86 137 -260
253 -152 100 -169 109 -212 109 -26 0 -62 -8 -80 -17z"
      />
      <path
        d="M3235 3464 c-16 -8 -179 -163 -360 -345 l-330 -329 -110 110 c-118
118 -151 137 -221 124 -41 -8 -88 -44 -109 -85 -19 -36 -19 -112 -1 -147 16
-29 325 -339 366 -366 30 -20 111 -21 148 -2 15 8 208 196 429 418 433 435
425 425 409 513 -18 95 -136 153 -221 109z"
      />
      <path
        d="M2044 1375 c-82 -18 -137 -47 -201 -107 -90 -86 -133 -185 -133 -308
0 -124 43 -222 135 -309 168 -159 422 -155 588 10 168 168 168 430 0 598 -65
64 -139 104 -227 120 -72 13 -84 13 -162 -4z m131 -319 c35 -15 65 -59 65 -96
0 -67 -72 -121 -136 -100 -94 31 -101 156 -10 196 39 17 40 17 81 0z"
      />
      <path
        d="M3324 1375 c-82 -18 -137 -47 -201 -107 -90 -86 -133 -185 -133 -308
0 -124 43 -222 135 -309 168 -159 422 -155 588 10 168 168 168 430 0 598 -65
64 -139 104 -227 120 -72 13 -84 13 -162 -4z m131 -319 c35 -15 65 -59 65 -96
0 -67 -72 -121 -136 -100 -94 31 -101 156 -10 196 39 17 40 17 81 0z"
      />
    </g>
  </svg>
)

export const AnnouncementIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 512.000000 512.000000"
    width={size || width}
    {...props}
  >
    <g
      fill="#000000"
      stroke="none"
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    >
      <path
        d="M1290 4785 c-337 -69 -587 -329 -639 -665 -9 -56 -11 -473 -9 -1605
3 -1669 -1 -1540 58 -1697 66 -177 261 -372 438 -438 155 -58 66 -55 1422 -55
1356 0 1267 -3 1422 55 178 66 372 260 438 438 59 156 55 34 55 1742 0 1430
-1 1570 -17 1625 -43 157 -109 273 -213 378 -68 70 -184 148 -263 177 -156 59
-58 55 -1397 57 -987 1 -1243 -1 -1295 -12z m2505 -320 c172 -45 305 -179 350
-352 13 -49 15 -258 15 -1544 0 -969 -4 -1505 -10 -1540 -25 -131 -124 -266
-239 -328 -120 -64 -58 -61 -1351 -61 -1024 0 -1183 2 -1235 15 -172 45 -305
179 -350 352 -23 86 -23 3020 0 3106 45 171 177 306 346 351 83 23 2388 23
2474 1z"
      />
      <path
        d="M1535 3505 c-46 -25 -63 -44 -81 -91 -41 -108 48 -224 164 -211 148
17 193 199 70 290 -36 27 -114 33 -153 12z"
      />
      <path
        d="M2175 3506 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 25
-8 257 -10 714 -8 665 3 677 3 704 24 53 39 69 71 69 134 0 63 -16 95 -69 134
-27 21 -38 21 -714 23 -556 2 -693 0 -717 -11z"
      />
      <path
        d="M1535 2705 c-46 -25 -63 -44 -81 -91 -41 -108 48 -224 164 -211 148
17 193 199 70 290 -36 27 -114 33 -153 12z"
      />
      <path
        d="M2175 2706 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 25
-8 257 -10 714 -8 665 3 677 3 704 24 53 39 69 71 69 134 0 63 -16 95 -69 134
-27 21 -38 21 -714 23 -556 2 -693 0 -717 -11z"
      />
      <path
        d="M1535 1905 c-46 -25 -63 -44 -81 -91 -41 -108 48 -224 164 -211 148
17 193 199 70 290 -36 27 -114 33 -153 12z"
      />
      <path
        d="M2175 1906 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 25
-8 257 -10 714 -8 665 3 677 3 704 24 53 39 69 71 69 134 0 63 -16 95 -69 134
-27 21 -38 21 -714 23 -556 2 -693 0 -717 -11z"
      />
    </g>
  </svg>
)

export const WeiXin: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 1024 1024"
    width={size || width}
    {...props}
  >
    <path
      d="M395.846 603.585c-3.921 1.98-7.936 2.925-12.81 2.925-10.9 0-19.791-5.85-24.764-14.625l-2.006-3.864-78.106-167.913c-0.956-1.98-0.956-3.865-0.956-5.845 0-7.83 5.928-13.68 13.863-13.68 2.965 0 5.928 0.944 8.893 2.924l91.965 64.43c6.884 3.864 14.82 6.79 23.708 6.79 4.972 0 9.85-0.945 14.822-2.926L861.71 282.479c-77.149-89.804-204.684-148.384-349.135-148.384-235.371 0-427.242 157.158-427.242 351.294 0 105.368 57.361 201.017 147.323 265.447 6.88 4.905 11.852 13.68 11.852 22.45 0 2.925-0.957 5.85-2.006 8.775-6.881 26.318-18.831 69.334-18.831 71.223-0.958 2.92-2.013 6.79-2.013 10.75 0 7.83 5.929 13.68 13.865 13.68 2.963 0 5.928-0.944 7.935-2.925l92.922-53.674c6.885-3.87 14.82-6.794 22.756-6.794 3.916 0 8.889 0.944 12.81 1.98 43.496 12.644 91.012 19.53 139.48 19.53 235.372 0 427.24-157.158 427.24-351.294 0-58.58-17.78-114.143-48.467-163.003l-491.39 280.07-2.963 1.98z"
      fill="#09BB07"
    />
  </svg>
)

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  )
}

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  )
}

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
)

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
)

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
)

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  )
}
