import './styles.scss';

export const Search = ({ onChange, placeholder, inputSearchRef }) => {
  return (
    <input
      ref={inputSearchRef}
      type='text'
      onChange={onChange}
      className='search'
      name={placeholder}
      placeholder={placeholder} />
  );
};
