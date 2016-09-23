module BestInPlace
  module Utils
    module_function

    def build_best_in_place_id(object, field)
      case object
      when Symbol, String
        "best_in_place_#{object}_#{field}"
      else
        id = "best_in_place_#{object_to_key(object)}"
        id << "_#{object.id}" if object.class.ancestors.include?(ActiveModel::Serializers::JSON)
        id << "_#{field}"
        id
      end
    end

    def object_to_key(object)
      return object.class.to_s.underscore unless object.class.respond_to?(:model_name)
      ActiveModel::Naming.param_key(object.class)
    end
  end
end
