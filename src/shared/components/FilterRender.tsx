export function FilterRender(array: string[], value: string) {
  return array.map((el) => {
    return (
      <div className={`filter-${value}__box`}>
        <div className='check'>
          <label>
            <input type='checkbox' value={el} name={value} />
            {el.toUpperCase()}
          </label>
        </div>
      </div>
    );
  });
}
