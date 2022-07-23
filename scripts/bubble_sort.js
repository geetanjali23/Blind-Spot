function Bubble() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], "");//Color update

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "rgb(172, 78, 158)");//Color update
                div_update(divs[j + 1], div_sizes[j + 1], "rgb(172, 78, 158)");//Color update

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "rgb(172, 78, 158)");//Height update
                div_update(divs[j + 1], div_sizes[j + 1], "rgb(172, 78, 158)");//Height update
            }
            div_update(divs[j], div_sizes[j], "rgb(44, 53, 181)");//Color updat
        }
        div_update(divs[j], div_sizes[j], "rgb(71, 71, 169)");//Color update
    }
    div_update(divs[0], div_sizes[0], "rgb(71, 71, 169)");//Color update

    enable_buttons();
}
