import { nanoid } from "nanoid";

const Filter = ({ filter, onChange }) => {
  const findId = nanoid(4);
  return (
    <>
      <label htmlFor={findId}>Find contacts by name </label>
      <input
        type="text"
        id={findId}
        value={filter}
        name="filter"
        onChange={onChange}
      />
    </>
  );
};

export default Filter;
