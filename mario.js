
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    // console.log("Uh oh... the pyramid is under construction.");
    // console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
    let row ="#";
    for (let i = 0; i <= height; i = i + 1){
        row ="";
        for( let j = 0; j <= height; j = j+1){
             if(i != 0 & j >= height-i){
                row = row.concat("#");
            }else{
                row=row.concat(" ");
            }              

        }
           
        console.log(row);
    }

}
