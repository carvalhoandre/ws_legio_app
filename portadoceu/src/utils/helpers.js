export function checkIsSelected(selectedLegios, legio){
    return selectedLegios.some(item => item.id === legio.id);
}