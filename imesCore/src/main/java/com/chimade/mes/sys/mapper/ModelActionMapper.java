package com.chimade.mes.sys.mapper;

import java.util.List;

import com.chimade.mes.sys.model.Model;
import com.chimade.mes.sys.model.ModelAction;

public interface ModelActionMapper extends BaseMapper<ModelAction> {

	List<Model> findModelMapActionBySearch(ModelAction baseModelAction);

}
