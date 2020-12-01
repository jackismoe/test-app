const defaultLimit = 100

const TextField = (props) => {
  <input className='field field-light' onChange={props.onChange} limit={props.limit || defaultLimit} />
}

export default TextField