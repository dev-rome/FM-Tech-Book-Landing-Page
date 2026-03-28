type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

function Button({ children, className, ariaLabel }: ButtonProps) {
  return (
    <a href="#memberships" aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}

export default Button;
