import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchTextStyled } from './style';

type SearchTextProps = {
  handleChange: any;
  handleKeyPress: any;
  filter?: string;
};

export default function SearchText({
  handleChange,
  handleKeyPress,
  filter,
}: SearchTextProps) {
  return (
    <SearchTextStyled>
      <InputGroup className="input-search">
        <FormControl
          defaultValue={filter}
          placeholder="Seach username..."
          aria-describedby="basic-addon2"
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </InputGroup>
    </SearchTextStyled>
  );
}
