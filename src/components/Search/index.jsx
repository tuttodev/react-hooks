import './styles.scss';

export const Search = ({ onChange, placeholder }) => {
  return (
    <input
      type='text'
      onChange={(event) => onChange(event)}
      className='search'
      placeholder={placeholder} />
  );
};
