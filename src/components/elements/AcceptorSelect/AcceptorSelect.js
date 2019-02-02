import React, {useState} from 'react';
import Autocomplete from 'react-autocomplete';

const items = [
    {id: 1, name: 'item 1'},
    {id: 2, name: 'item 2'},
    {id: 3, name: 'item 3'},
    {id: 4, name: 'item 4'},
]

const AcceptorSelect = ({onChange, onSelect}) => {
    const [value, setValue] = useState();

    const handleOnSelect = (value, item) => {
        setValue(value);
        onSelect(item);
    }

    return (
        <div>
            <Autocomplete
                getItemValue={(item) => item.name}
                value={value}
                items={items}
                renderItem={(item, isHighlighted) =>
                    <div style={{background: isHighlighted ? 'lightgray' : 'white'}}>
                        {item.name}
                    </div>
                }
                onChange={(e) => onChange(e.target.value)}
                onSelect={(value, item) => handleOnSelect(value, item)}
            />
        </div>
    )
}


export default AcceptorSelect;
