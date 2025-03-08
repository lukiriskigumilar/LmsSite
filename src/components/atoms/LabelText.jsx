function LabelText({txtLabel,nameLabel}) {
    return ( 
        <label htmlFor={nameLabel} className="font-family-dm-sans text-lg font-normal text-textColorBlack">{txtLabel}<span
                                className="text-red-600"> *</span></label>
    );
}

export default LabelText;