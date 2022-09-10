//Params : a string only of the characters >,., and <
//return : the number of photos taken by cameras. the . is the camera, the > are cars going left or right, and cameras take pictures of every car that is passing.
//e xample countPhotos('.><<<><>><<<<<<><<<>><.>>><.>>')=> 33
//pseudo: go step by step through the string, at cameras, add the number of cars going right so far to the total and increment the cam counter by one, for each car facing left, add the number of counted cameras to the total, for cars pointing right, add one to the number of right facing cars so far.

// Count the number of photos take from cars driving towards a camera.
function countPhotos(road) {
    let result = 0,
        cam_count = 0,
        right_count = 0;
    for (let i = 0; i < road.length; ++i) {
        if (road[i] == '.') {
            result += right_count;
            cam_count += 1;
        }
        else if (road[i] == '<') {
            result += cam_count;
        }
        else if (road[i] == '>') {
            right_count += 1;
        }
    }
    return result;
}