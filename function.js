
// javascript program to calculate the volume of a cylinder
// vomula is base area by height
// radius = 14 and height = 23

function Myfunction(radius, height){
    base_area = (22/7)* radius * radius;
    volume = base_area * height;
    return volume;
}

console.log("Volume:", Myfunction(14, 23), "cm^2")