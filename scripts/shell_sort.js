function Shell() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log^2 N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    var n = array_size;
    var gap = Math.floor(n / 2); // Initial gap size

    while (gap > 0) {
        for (var j = gap; j < n; j++) {
            div_update(divs[j], div_sizes[j], "yellow"); // Color update (current element)

            var temp = div_sizes[j];
            var i = j;

            // Traverse and compare elements with gap
            while (i >= gap && div_sizes[i - gap] > temp) {
                div_update(divs[i], div_sizes[i], "red"); // Color update (comparison)
                div_update(divs[i - gap], div_sizes[i - gap], "red"); // Color update (comparison)

                div_sizes[i] = div_sizes[i - gap]; // Shift element
                div_update(divs[i], div_sizes[i], "red"); // Height update
                div_update(divs[i - gap], div_sizes[i - gap], "red"); // Height update

                div_update(divs[i], div_sizes[i], "blue"); // Color update (after comparison, traversing part)
                div_update(divs[i - gap], div_sizes[i - gap], "blue"); // Color update (after comparison, traversing part)

                i -= gap; // Move backward in the gap
            }

            // Insert the element at the correct position
            div_sizes[i] = temp;
            div_update(divs[i], div_sizes[i], "blue"); // The element is placed in the correct position

            // Update the color for the entire array:
            for (var t = 0; t < n; t++) {
                if (t <= j) {
                    div_update(divs[t], div_sizes[t], "green"); // Sorted part
                } else {
                    div_update(divs[t], div_sizes[t], "blue"); // Unsorted part
                }
            }
        }
        gap = Math.floor(gap / 2); // Reduce the gap size for the next iteration
    }

    enable_buttons();
}
