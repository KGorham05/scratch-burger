console.log('Whaddup World!');

$(function () {

    $(".eat-btn").on("click", function (e) {
        e.preventDefault();
        console.log("clicked the button")
        let id = $(this).attr("data-id");
        console.log($(this));
        console.log(id);

        $.ajax({
            url: `/api/burger/${id}`,
            method: "PUT"
        }).then((response) => {
            console.log(response);
            location.reload();
        });
    }),

    $(".delete-btn").on("click", (e) => {
        e.preventDefault();
        console.log("clicked the button")
        // This $(this) is returning undefined
        // let id = $(this).attr("data-id");
        // Solved with vanilla JS but don't understand why above func works but this one doesn't
        let id = document.getElementById("delete").getAttribute("data-id");
        // console.log($(this));
        console.log(id);

        $.ajax({
            url: `/api/delete/${id}`,
            method: "DELETE"
        }).then((response) => {
            console.log(response);
            location.reload();
        });
    });
});
