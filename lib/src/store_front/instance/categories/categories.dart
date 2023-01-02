// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:youcan_flutter_sdk/src/store_front/core/api_links/categories_api_builder/categories_api_link_builder.dart';
import 'package:youcan_flutter_sdk/src/store_front/core/api_links/categories_api_builder/extensions/endpoint.dart';
import 'package:youcan_flutter_sdk/src/store_front/instance/categories/extensions/all.dart';
import 'package:youcan_flutter_sdk/src/store_front/instance/categories/extensions/limit.dart';
import 'package:youcan_flutter_sdk/src/store_front/instance/products/products.dart';

import '../../../../youcan_flutter_sdk.dart';
import '../../core/api_links/const/const.dart';
import '../../core/base/categories_base.dart';
import '../../core/mixins/requests_client.dart';
import '../../core/models/category/category.dart';

import "package:meta/meta.dart";

class Categories with RequestsClient implements CategoriesBase {
  // This an internal variable used to store the limit query.
  int? _limitQuery;

// this is an internal categoryId variable, it's used to store the categoryId, and it's used to access the products api, of the category.
  String? _categoryId;
  // This is an internal instance of [Products], it's used to access the products api.
  Products _internalProductsInstance = Products();

  /// This is the products instance of the category, after specifying the category using `category()`, you can use this instance to access the products api.
  Products get products => _internalProductsInstance;

  /// The limit query is used to limit the number of categories returned from the api, if not specified, the api will return all the categories.
  /// This is set using the `limit()` method.
  int? get limitQuery => _limitQuery;

  /// This is the endpoint of the api, it's used to access the api.
  /// Note: the api don't allow access to endpoint of just the categories, you need to access it's products.
  /// 
  /// This api link is valid, but if you tries it in some web browser, it will show an error page  :
  ///
  /// `https://api.youcan.shop/v1/stores/{store_id}/categories/{category_id}`
  ///
  /// Now this after we access "/products", it will show the products of that category normally without issues :
  ///
  ///  `https://api.youcan.shop/v1/stores/{store_id}/categories/{category_id}/products`
  @override
  String? get endPoint {
    final String storeApiLink = YouCan.instance.storeApiLink;
    // print("_categoryId $_categoryId");

    return CategoriesApiLinkBuilder(api: storeApiLink)
        .endpoint(EndPoints.category(_categoryId ?? ""))
        .fullApiLink;
  }

  @override
  int get hashCode => limitQuery.hashCode;

  set products(Products newProductsInstance) {
    _internalProductsInstance = newProductsInstance;
  }

  Categories._([
    this._limitQuery,
  ]);

  // This is a factory constructor used to create a new instance of [Categories], and it was designed to not be instantiated outside the [YouCan] class.
  factory Categories([int? limitQuery]) {
    return Categories._(limitQuery);
  }

  /// This method is used to get all the categories from the api.
  Future<List<Category>> all() async {
    return await allExtension();
  }

  /// This method is used to limit the number of categories returned from the api.
  Categories limit(int limit) {
    return limitExtension(limit);
  }

  /// This method is used to specify the category you want to access the products api using it's id.
  Categories category(String id) {
    final cat = Categories();
    cat._categoryId = id;
    cat.products = Products(categoryId: id);

    return cat;
  }

  @override
  bool operator ==(covariant Categories other) {
    if (identical(this, other)) return true;

    return other.limitQuery == limitQuery;
  }

  @override
  String toString() => 'Categories(limitQuery: $limitQuery)';

  @protected
  Categories copyWith({
    int? limitQuery,
  }) {
    return Categories(
      limitQuery ?? this.limitQuery,
    );
  }
}
