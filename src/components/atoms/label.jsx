function Label({txtLabel,nameLabel}) {
    return ( 
        <label htmlFor={nameLabel} className="text-lg font-normal text-textColorBlack">{txtLabel}<span
                                className="text-red-600"> *</span></label>
    );
}

export default Label;