import 'package:youcan_flutter_sdk/src/store_front/core/api_links/customers_api_link_builder/customers_api_link_builder.dart';

extension TokenExtension on CustomersApiLinkBuilder {
  CustomersApiLinkBuilder token(String token) {
    return this.copyWith(
      token: token,
    );
  }
}
