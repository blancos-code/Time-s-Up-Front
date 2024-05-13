import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-seventy-two",
    templateUrl: "./card-seventy-two.component.html",
})
export class CardSeventyTwoComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        Chart.pluginService.register({
            afterUpdate: function (chart) {
                if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
                    var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
                    arc.round = {
                        x: (chart.chartArea.left + chart.chartArea.right) / 2,
                        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                        radius: (chart.outerRadius + chart.innerRadius) / 2,
                        thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
                        backgroundColor: arc._model.backgroundColor,
                    };
                }
            },

            afterDraw: function (chart) {
                if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
                    var ctx = chart.chart.ctx;
                    var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
                    var startAngle = Math.PI / 2 - arc._view.startAngle;
                    var endAngle = Math.PI / 2 - arc._view.endAngle;

                    ctx.save();
                    ctx.translate(arc.round.x, arc.round.y);
                    ctx.fillStyle = arc.round.backgroundColor;
                    ctx.beginPath();
                    ctx.arc(arc.round.radius * Math.sin(startAngle), arc.round.radius * Math.cos(startAngle), arc.round.thickness, 0, 2 * Math.PI);
                    ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
            },
        });

        var config = {
            type: "doughnut",
            data: {
                labels: ["Restless", "Awake"],
                datasets: [
                    {
                        data: [40, 20],
                        backgroundColor: ["#3B82F6", "#EFF6FF"],
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                hover: { mode: null },
                elements: {
                    arc: {
                        roundedCornersFor: 0,
                    },
                },
                legend: {
                    display: false,
                },
                cutoutPercentage: 85,
            },
        };
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, config);
    }
}
