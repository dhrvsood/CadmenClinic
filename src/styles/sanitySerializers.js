export const blockSerializer = {
  types: {
    block: (props) => {
      switch (props.node.style) {
        default:
          return <h4 className='rich-h4'>{props.children}</h4>
        }
    }
  }
}
