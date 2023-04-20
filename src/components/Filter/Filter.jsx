import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from 'Redux/phonebook/filterSlice';
import { selectFilterValue } from 'Redux/phonebook/selectors';

import { Input, Label } from './Filter.styled';

const Filter = () => {
  const value = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  const onFilterName = ({ target: { value } }) => {
    dispatch(setFilterValue(value));
  };

  return (
    <Label>
      Find contacts by name:
      <Input type="text" value={value} onChange={onFilterName} />
    </Label>
  );
};

export { Filter };
