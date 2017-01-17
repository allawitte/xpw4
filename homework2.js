function formSetEditReport(idReport) {
    var report = {
        'type': ReportPlugin.defaultReportType,
        'format': ReportPlugin.defaultReportFormat,
        'description': '',
        'period': ReportPlugin.defaultPeriod,
        'hour': ReportPlugin.defaultHour,
        'reports': []
    };//1-проверить, что попадает в report

    if (idReport > 0) {
        report = ReportPlugin.reportList[idReport];
        $('#report_submit').val(ReportPlugin.updateReportString);//2-проверить, что попадает в val
    }
    else {
        $('#report_submit').val(ReportPlugin.createReportString);//3-проверить, что попадает в val
    }

    toggleReportType(report.type);//4-проверить report.type

    $('#report_description').html(report.description);
    $('#report_segment').find('option[value=' + report.idsegment + ']').prop('selected', 'selected');
    $('#report_type').find('option[value=' + report.type + ']').prop('selected', 'selected');
    $('#report_period').find('option[value=' + report.period + ']').prop('selected', 'selected');
    $('#report_hour').val(report.hour);
    $('[name=report_format].' + report.type + ' option[value=' + report.format + ']').prop('selected', 'selected');

    $('[name=reportsList] input').prop('checked', false);

    var key;
    for (key in report.reports) {
        //5-проверить, что собирается тут в каждой итерации цикла
        $('.' + report.type + ' [report-unique-id=' + report.reports[key] + ']').prop('checked', 'checked');
    }

    updateReportParametersFunctions[report.type](report.parameters);

    $('#report_idreport').val(idReport);
}
//Можно передевать ReportPlugin в зависимостях в ф-цию formSetEditReport