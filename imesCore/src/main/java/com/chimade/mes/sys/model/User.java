package com.cdc.mes.sys.model;


/**
 * 
 * @author root
 *
 */
public class User 
extends BaseModel {

	private int id;
	private String userName;
	private String password;
	private String loginAccount ;
	
	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", password=" + password + ", loginAccount=" + loginAccount
				+ "] "+super.toString();
	}
 
	public int getId() {
		return id;
	}
	public String getPassword() {
		return password;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getLoginAccount() {
		return loginAccount;
	}
	public void setLoginAccount(String loginAccount) {
		this.loginAccount = loginAccount;
	}
	public void setPassword(String password) {
		this.password = password;
	}
 
	public void setId(int id) {
		this.id = id;
	}
	public User(){
		super();
	}
	public User(int id, String userName, String password,String loginAccount) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.loginAccount = loginAccount;
	}
}
