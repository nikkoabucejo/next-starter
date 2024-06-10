type Page<TProps = unknown> = React.FC<Readonly<TProps>>;

type Layout<TProps = unknown> = React.FC<
  Readonly<
    TProps & {
      children: Children;
    }
  >
>;
