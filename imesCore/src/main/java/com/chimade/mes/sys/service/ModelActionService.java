package com.chimade.mes.sys.service ;
import java.util.List;

import com.chimade.mes.sys.model.Model;
import com.chimade.mes.sys.model.ModelAction;
public interface ModelActionService extends BaseService<ModelAction> {
	List<Model> findModelMapActionBySearch (ModelAction t);
}

