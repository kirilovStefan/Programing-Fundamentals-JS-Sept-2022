function formatGrade(grade) {

    let descriptionGrade = '';

    if (grade < 3.00) {
        descriptionGrade = 'Fail';
    } else if (grade < 3.50) {
        descriptionGrade = 'Poor';
    } else if (grade < 4.50) {
        descriptionGrade = 'Good';
    } else if (grade < 5.50) {
        descriptionGrade = 'Very good';
    } else {
        descriptionGrade = 'Excellent';
    }

    if (descriptionGrade === 'Fail') {
        console.log(`${descriptionGrade} (${Math.floor(grade)})`);
    } else {
        console.log(`${descriptionGrade} (${grade.toFixed(2)})` );
    }
}
formatGrade(2.99);