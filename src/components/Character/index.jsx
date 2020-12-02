import './styles.scss'

export const Character = ({ character, isLiked, addToFav }) => {
  const { id, image, name, created } = character

  return (
    <div className='item' key={id}>
      <div
        onClick={() => addToFav(character)}
        className='item__like'
      >{isLiked ? '🧡' : '🤍'}</div>
      <img
        src={image}
        className='item__img'
        alt='character imagen'
        width='300'
        height='300'
      />
      <h3 className='item__title'>{name}</h3>
      <small>{created}</small>
    </div>
  )
}