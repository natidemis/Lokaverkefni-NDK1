export default function getCurrentDate() : string{
    const monthNames : string[] = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dateObj: Date = new Date();
    const month: string = monthNames[dateObj.getMonth()];
    const day: string = String(dateObj.getDate()).padStart(2, '0');
    const year: number = dateObj.getFullYear();
    const output : string = month  + '\n'+ day  + ',' + year;

    function getDayName(dateStr : string, locale : string)
    {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }

    var dateStr: string = output;
    var cd: string = getDayName(dateStr, "nl-NL");
    return cd + ', ' + dateStr.split(',')[0]
}