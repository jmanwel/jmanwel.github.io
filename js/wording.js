const search = document.querySelector("#input_search")
const table = document.querySelector("#table_wording");

function sortTable(n,type) {
    let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;           
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].cells[n];
        y = rows[i + 1].cells[n];
        if (dir == "asc") {
            if ((type=="str" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) || (type=="int" && parseFloat(x.innerHTML) > parseFloat(y.innerHTML))) {
            shouldSwitch= true;
            break;
            }
        } else if (dir == "desc") {
            if ((type=="str" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) || (type=="int" && parseFloat(x.innerHTML) < parseFloat(y.innerHTML))) {
            shouldSwitch = true;
            break;
            }
        }
        }
        if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
        } else {
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
        }
    }
}


function search_table() {
    let filter, tr, td, i, j, visible;
    filter = search.value.toUpperCase();
    tr = table.querySelectorAll("tr");

    for (i = 0; i < tr.length; i++) {
        visible = false;
        td = tr[i].querySelectorAll("td");
        for (j = 0; j < td.length; j++) {
        if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
            visible = true;
        }
        }
        if (visible === true) {
        tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
        }
    }
}

search.addEventListener("keyup", search_table)