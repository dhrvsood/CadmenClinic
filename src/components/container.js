const Container = ({ children, classList }) => {
  const classes = classList === undefined ? '' : classList
  return <div className={`mx-auto max-w-7xl ${classes}`}>{children}</div>
}

export default Container
