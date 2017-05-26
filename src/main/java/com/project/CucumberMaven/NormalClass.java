package com.project.CucumberMaven;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class NormalClass {

	public static void main(String[] args) 
	{
		WebDriver driver;
		System.setProperty("webdriver.chrome.driver", "Resource/chromedriver.exe");
		driver= new ChromeDriver();//Initialize
		driver.manage().window().maximize();
		
		driver.navigate().to("https://www.facebook.com/login/");
		
		driver.findElement(By.name("email")).sendKeys("Saurab");
		
		driver.findElement(By.name("pass")).sendKeys("pass");
		
		driver.findElement(By.name("login")).click();
		
		driver.quit();	

	}

}
