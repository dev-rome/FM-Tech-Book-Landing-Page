type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

function Button({ children, className }: ButtonProps) {
  return (
    <a href="#memberships" className={className}>
      {children}
    </a>
  );
}

export default Button;
