import { StyledFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from '../../redux/auth/selectors'

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <StyledFilter
      placeholder="filter here"
      type="text"
      value={filter}
      onChange={event => dispatch(changeFilter(event.target.value))}
    />
  );
};
