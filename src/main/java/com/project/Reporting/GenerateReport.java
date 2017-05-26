package com.project.Reporting;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class GenerateReport {
    public static void GenerateMasterthoughtReport(){
        try{
            String RootDir = System.getProperty("user.dir");
            File reportOutputDirectory = new File("target/Masterthought");
            List<String> jsonFiles  = new ArrayList<String>();
            jsonFiles .add("target/cucumber-report-composite.json");
            jsonFiles .add("target/cucumber-report-composite2.json");

            
            String buildNumber = "1";
            String projectName = "cucumberProject";
            boolean runWithJenkins = false;
            boolean parallelTesting = true;
            String buildProject = "cucumber-jvm";
            
            String pluginUrlPath = "";
            boolean skippedFails = true;
            boolean pendingFails = true;
            boolean undefinedFails = true;
            boolean missingFails = true;
            boolean flashCharts = true;
            boolean highCharts = false;
            boolean artifactsEnabled = false;
            String artifactConfig = "";
            
            Configuration configuration = new Configuration(reportOutputDirectory, projectName);
            configuration.setParallelTesting(parallelTesting);
            configuration.setRunWithJenkins(runWithJenkins);
            configuration.setBuildNumber(buildNumber);
            configuration.addClassifications("Platform", "Windows");
            configuration.addClassifications("Browser", "Chrome");
            configuration.addClassifications("Branch", "release/1.0");
    

            ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
            reportBuilder.generateReports();
            
            
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}