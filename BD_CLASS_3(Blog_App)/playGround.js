import translate from "translate";

const text = await translate(
    "aap kya kar rahe ho ?",
    {
        from:"hi",
        to:"en"
    }
)
console.log(text);
