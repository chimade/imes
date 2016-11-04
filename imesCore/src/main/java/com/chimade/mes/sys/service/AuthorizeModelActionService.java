package com.chimade.mes.sys.service ;
import java.util.List;

import com.chimade.mes.sys.model.AuthorizeModelAction;
import com.chimade.mes.sys.model.User;
import com.chimade.mes.sys.service.BaseService;
public interface AuthorizeModelActionService extends BaseService<AuthorizeModelAction> {

	List<User> findModelLinkUserBySearch(User user);

	int fetchTotalNumberForSearchMolelLinkUser(User user);

}

