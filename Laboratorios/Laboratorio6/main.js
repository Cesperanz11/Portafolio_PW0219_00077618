var parseLateSwitch = value => {
    if(value) {
        return "Tarde"
    }
    return "A tiempo";
};

function addStudent(carnet, schedule, late, tbody) {
    var newRow = document.createElement("tr");
    var date = new Date();

    newRow
}