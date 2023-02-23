import { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  const { color = '#1DA1F2', width = 50, height, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      viewBox="0 0 50 36"
      color={color}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="m44.342 3.927-2.518 5.841L50 8.545l-5.658-4.618Zm-9.284 3.232 2.336 8.975 5.18-12.011-7.516 3.036ZM16.886 35.5V22.133L8.346 35.5h8.54Zm1.595-15.819-.045.059v8.303l17.719-9.85.148-.082-4.317-16.636-13.505 18.206ZM0 .5l17.403 17.62.178.18L30.776.5H0Z"
      />
    </svg>
  );
}
