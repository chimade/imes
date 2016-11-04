package com.chimade.mes.sys.model;

/**
 * 
 * @author root
 *
 */
public class User extends PageableBaseModel {

	public static int ENABLED = 1 ;
	
	public static int DIS_ENABLED = 0 ;
	
	private int id;
	private String userName;
	private String password;
	private String loginAccount;
	
	private Model model ;
	public Model getModel() {
		return model;
	}

	public void setModel(Model model) {
		this.model = model;
	}

	/**
	 *  1 enable , 0 disabled
	 */
	private int status;

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", password=" + password + ", loginAccount=" + loginAccount
				+ ", status=" + status + "]";
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
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

/*	public User() {
		super();
	}

	public User(int id, String userName, String password, String loginAccount,int status) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.loginAccount = loginAccount;
		this.status =status;
	}*/
}
