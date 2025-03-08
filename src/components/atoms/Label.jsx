function LabelText({txtLabel,nameLabel}) {
    return ( 
        <label htmlFor={nameLabel} className="font-family-dm-sans text-lg font-normal text-textColorBlack">{txtLabel}<span
                                className="text-red-600"> *</span></label>
    );
}

<<<<<<<< HEAD:src/components/atoms/LabelText.jsx
export default LabelText;
========
export default Label;
>>>>>>>> d13d2542cd8484856ecde0c56bab62bc616309b7:src/components/atoms/Label.jsx
