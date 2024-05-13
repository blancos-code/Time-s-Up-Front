<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="w-full flex items-center justify-center py-12 sm:px-6 px-4">
            <div class="sm:max-w-3xl w-full rounded shadow bg-white dark:bg-gray-800">
                <!-- Please include this script in the head section of your webpage to make the chart work.-->
                <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script> -->
                <div class="px-5">
                    <div class="md:flex">
                        <div class="md:w-3/4 py-6 md:pr-7">
                            <div class="md:flex items-center">
                                <p class="text-xl font-semibold leading-5 md:pr-48 dark:text-gray-100 text-gray-800">Revenue Report</p>
                                <div class="flex items-center md:pt-0 pt-4">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-indigo-700 rounded-full"></div>
                                        <p class="text-sm leading-none text-gray-500 dark:text-gray-400 pl-2">Earning</p>
                                    </div>
                                    <div class="flex items-center pl-5">
                                        <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <p class="text-sm leading-none pl-2 text-gray-500 dark:text-gray-400">Expense</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full h-full pt-8">
                                <canvas id="canvas"></canvas>
                            </div>
                        </div>
                        <div class="md:border-l md:py-6 py-4 border-gray-200 md:w-1/4 h-full flex items-center flex-col">
                            <div class="flex items-center relative w-20 rounded border border-indigo-700">
                                <select class="py-1.5 px-3.5 uppercase tracking-normal focus:outline-none text-xs font-semibold leading-none text-center text-indigo-700 appearance-none pr-3.5 z-20 relative bg-transparent w-full">
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                </select>
                                <div class="mx-1 absolute right-0 z-10 pointer-event-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-2xl font-medium leading-normal pt-10 text-center dark:text-gray-100 text-gray-800">$25,852</p>
                            <p class="text-sm leading-none text-center pt-3 text-gray-500 dark:text-gray-400">Budget: 56,800</p>
                            <div class="px-11 pt-8">
                                <canvas id="myChart" width="130"></canvas>
                            </div>
                            <button class="text-sm mt-12 mb-6 font-medium leading-none text-center text-white py-2.5 px-5 rounded bg-indigo-700 hover:bg-indigo-600">Increase Budget</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//npm install chart.js@2.8.0
import Chart from "chart.js";
export default {
    name: "index",
    data() {
        return {
            chartId: "myChart",
        };
    },
    mounted() {
        this.createChart();
    },
    methods: {
        createChart() {
            var ctx = document.getElementById("canvas").getContext("2d");

            var data = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
                datasets: [
                    {
                        label: "Earning",
                        backgroundColor: ["#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA"],
                        data: [100, 200, 300, 250, 100, 50, 200, 300, 100],
                        borderColor: "#FFFFFF",
                        borderWidth: 0,
                        fill: false,
                    },

                    {
                        label: "Expenses",
                        backgroundColor: ["#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24"],
                        data: [-100, -200, -250, -250, -100, -50, -200, -250, -100],
                        borderColor: "#FFFFFF",
                        borderWidth: 0,
                    },
                ],
            };

            new Chart(ctx, {
                type: "bar",
                data: data,
                options: {
                    legend: {
                        display: false,
                    },
                    barValueSpacing: 0,
                    barRoundness: 1,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    min: -300,
                                    max: 300,
                                },
                                gridLines: {
                                    display: false,
                                    drawBorder: false,
                                },
                            },
                        ],
                        xAxes: [
                            {
                                stacked: true,
                                barPercentage: 0.2,
                                gridLines: {
                                    display: false,
                                    drawBorder: false,
                                },
                            },
                        ],
                    },
                },
            });
            // chart2
            var ctx2 = document.getElementById("myChart").getContext("2d");
            new Chart(ctx2, {
                type: "line",
                data: {
                    labels: ["", "", "", " ", "", ""],
                    datasets: [
                        {
                            data: [22, 28, 25, 28, 26, 22],
                            backgroundColor: ["#FFFFFF"],
                            borderColor: ["#4338CA"],

                            borderWidth: 1,
                            strokeColor: "#6366F1",
                            fill: false,
                        },
                        {
                            data: [1, 5, 8, 9, 6, 9],
                            backgroundColor: ["#FFFFFF"],
                            borderColor: ["#4338CA"],
                            borderDash: [5],
                            borderWidth: 1,
                            strokeColor: "#6366F1",
                            fill: false,
                        },
                    ],
                },
                options: {
                    elements: {
                        point: {
                            radius: 0,
                        },
                    },
                    generateLabels: {
                        hidden: true,
                    },
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [
                            {
                                gridLines: {
                                    display: false,
                                    drawBorder: false,
                                },
                                display: false,
                                ticks: {
                                    min: 0,
                                    max: 30,
                                },
                            },
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false,
                                    drawBorder: false,
                                },
                                display: false,
                            },
                        ],
                    },
                },
            });
        },
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
