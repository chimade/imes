package com.chimade.mes.sys.service ;
import java.util.List;

import com.chimade.mes.sys.model.AuthorizeModelAction;
import com.chimade.mes.sys.model.Model;
import com.chimade.mes.sys.model.Role;
import com.chimade.mes.sys.model.User;
public interface AuthorizeModelActionService extends BaseService<AuthorizeModelAction> {

	List<User> findModelLinkUserBySearch(User user);

	int fetchTotalNumberForSearchMolelLinkUser(User user);

	List<Role> findModelLinkRoleBySearch(Role role);

	int fetchTotalNumberForSearchMolelLinkRole(Role role);
	
	List<Model> listUserAuthorizeById(  int  userId );
}

