function PatternArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="33"
      fill="none"
      viewBox="0 0 80 33"
      aria-hidden="true"
    >
      <g
        stroke="#FEA36F"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.553"
        clipPath="url(#a)"
      >
        <path d="M2.545 21.82c10.136-6.576 37.73-17.132 67.013-6.751" />
        <path d="M66.105 21.638a56.898 56.898 0 0 1 6.17-1.052c.488-.058 5.67-.495 5.561-.808-.519-1.498-1.718-2.888-2.495-4.266-1.59-2.817-2.982-5.61-3.806-8.737-.412-1.565-.652-3.15-.995-4.713" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 12 75.854.39l3.222 20.257-75.854 11.61z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PatternArrow;
