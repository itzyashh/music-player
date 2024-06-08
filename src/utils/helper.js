export const randomGradientGenerator = () => {

    // gradient2:'rgba(88, 73, 101, 1)',
    // gradient1opacity0:'rgba(53, 92, 125, 0.3)',
    // gradient1opacity1:'rgba(53, 92, 125, 0.2)',
    // gradient1opacity2:'rgba(53, 92, 125, 0.1)',

    // generate random primary color in rgb format
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const randomColor = `${red}, ${green}, ${blue}`; // generate 3 random color values

    // generate only dark colors
    const randomColorDark = `${red - 30}, ${green - 30}, ${blue - 30}`; // generate 3 random color values

    // exclude light red, green and yellow colors
    if (red > 200 && green > 200 && blue > 200) {
        return randomGradientGenerator();
    }

    // exclude bright colors
    if (red < 50 && green < 50 && blue < 50) {
        return randomGradientGenerator();
    }

    // generate 3 random opacity values
    console.log(randomColor, 'randomColor')
    // return array
    return randomColorDark;


}

export const customisedGradients = () => {
    const variant1 = {
        gradient2: 'rgba(34, 49, 63, 1)',
gradient1opacity0: 'rgba(52, 152, 219, 0.3)',
gradient1opacity1: 'rgba(52, 152, 219, 0.2)',
gradient1opacity2: 'rgba(52, 152, 219, 0.1)',
    },
    variant2 = {
        gradient2: 'rgba(44, 62, 80, 1)',
gradient1opacity0: 'rgba(155, 89, 182, 0.3)',
gradient1opacity1: 'rgba(155, 89, 182, 0.2)',
gradient1opacity2: 'rgba(155, 89, 182, 0.1)',
    },
    variant3 = {
        gradient2: 'rgba(88, 73, 101, 1)',
gradient1opacity0: 'rgba(53, 92, 125, 0.3)',
gradient1opacity1: 'rgba(53, 92, 125, 0.2)',
gradient1opacity2: 'rgba(53, 92, 125, 0.1)',
    },
    variant4 = {
        gradient2: 'rgba(93, 109, 126, 1)',
gradient1opacity0: 'rgba(44, 62, 80, 0.3)',
gradient1opacity1: 'rgba(44, 62, 80, 0.2)',
gradient1opacity2: 'rgba(44, 62, 80, 0.1)',
    },
    variant5 = {
        gradient2: 'rgba(22, 160, 133, 1)',
gradient1opacity0: 'rgba(46, 204, 113, 0.3)',
gradient1opacity1: 'rgba(46, 204, 113, 0.2)',
gradient1opacity2: 'rgba(46, 204, 113, 0.1)',
    },
    variant6 = {
        gradient2: 'rgba(192, 57, 43, 1)',
gradient1opacity0: 'rgba(231, 76, 60, 0.3)',
gradient1opacity1: 'rgba(231, 76, 60, 0.2)',
gradient1opacity2: 'rgba(231, 76, 60, 0.1)',

    },
    variant7 = {

    gradient2: 'rgba(142, 68, 173, 1)',
gradient1opacity0: 'rgba(127, 140, 141, 0.3)',
gradient1opacity1: 'rgba(127, 140, 141, 0.2)',
gradient1opacity2: 'rgba(127, 140, 141, 0.1)',
},
variant8 = {
gradient2: 'rgba(30, 30, 30, 1)',       // A very dark grey for the base color
gradient1opacity0: 'rgba(60, 60, 60, 0.3)',  // A lighter shade of grey with 30% opacity
gradient1opacity1: 'rgba(60, 60, 60, 0.2)',  // The same lighter shade with 20% opacity
gradient1opacity2: 'rgba(60, 60, 60, 0.1)',  // The same lighter shade with 10% opacity


}

// choose a random variant
const variants = [variant1, variant2, variant3, variant4, variant5, variant6, variant7, variant8];
const randomVariant = variants[Math.floor(Math.random() * variants.length)];
// return the random variant as an array
return [randomVariant.gradient2, randomVariant.gradient1opacity0, randomVariant.gradient1opacity1, randomVariant.gradient1opacity2]

}




