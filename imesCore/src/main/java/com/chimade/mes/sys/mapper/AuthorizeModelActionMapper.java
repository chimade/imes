package com.chimade.mes.sys.mapper;

import java.util.List;

import com.chimade.mes.sys.model.AuthorizeModelAction;
import com.chimade.mes.sys.model.Role;
import com.chimade.mes.sys.model.User;

public interface AuthorizeModelActionMapper extends BaseMapper<AuthorizeModelAction> {

	List<User> findModelLinkUserBySearch(User user);

	Integer fetchTotalNumberForSearchMolelLinkUser(User user);

	List<Role> findModelLinkRoleBySearch(Role role);

	Integer fetchTotalNumberForSearchMolelLinkRole(Role role);

}
