import React from 'react';

const MySelect = ({options, defaulValue}) => {
    return (
            <select name="regions" id="regions">
                <option disabled value="">{defaulValue}</option>
                {console.log(options)}
                {
                options.map(opt => {
                    <option key={opt} value={opt}>{opt}</option>
                }
                )}

                {/*<option value="Africa">Choose region</option>*/}
                {/*<option value="Africa">Africa</option>*/}
                {/*<option value="America">America</option>*/}
                {/*<option value="Asia">Asia</option>*/}
                {/*<option value="Europe">Europe</option>*/}
                {/*<option value="Ocenia">Ocenia</option>*/}
            </select>
    );
};

export default MySelect;