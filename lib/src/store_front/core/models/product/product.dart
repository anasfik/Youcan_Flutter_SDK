// ignore_for_file: public_member_api_docs, sort_constructors_first
// To parse this JSON data, do
//
//     final Product = ProductFromMap(jsonString);

import 'dart:convert';

import 'package:meta/meta.dart';

List<Product> ProductFromMap(String str) =>
    List<Product>.from(json.decode(str).map((x) => Product.fromJson(x)));

String ProductToMap(List<Product> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class Product {
  Product({
    required this.id,
    required this.name,
    required this.slug,
    required this.publicUrl,
    required this.thumbnail,
    required this.description,
    required this.price,
    required this.compareAtPrice,
    required this.hasVariants,
    required this.variantsCount,
    required this.variantOptions,
    required this.trackInventory,
    required this.meta,
    required this.images,
  });

  final String id;
  final String name;
  final String slug;
  final String publicUrl;
  final String thumbnail;
  final String description;
  final double price;
  final dynamic compareAtPrice;
  final bool hasVariants;
  final int variantsCount;
  final List<VariantOption> variantOptions;
  final bool trackInventory;
  final Meta meta;
  final List<Image> images;

  factory Product.fromJson(Map<String, dynamic> json) => Product(
        id: json["id"],
        name: json["name"],
        slug: json["slug"],
        publicUrl: json["public_url"],
        thumbnail: json["thumbnail"],
        description: json["description"],
        price: json["price"].toDouble(),
        compareAtPrice: json["compare_at_price"],
        hasVariants: json["has_variants"],
        variantsCount: json["variants_count"],
        variantOptions: List<VariantOption>.from(
            json["variant_options"].map((x) => VariantOption.fromJson(x))),
        trackInventory: json["track_inventory"],
        meta: Meta.fromJson(json["meta"]),
        images: List<Image>.from(json["images"].map((x) => Image.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "name": name,
        "slug": slug,
        "public_url": publicUrl,
        "thumbnail": thumbnail,
        "description": description,
        "price": price,
        "compare_at_price": compareAtPrice,
        "has_variants": hasVariants,
        "variants_count": variantsCount,
        "variant_options":
            List<dynamic>.from(variantOptions.map((x) => x.toJson())),
        "track_inventory": trackInventory,
        "meta": meta.toJson(),
        "images": List<dynamic>.from(images.map((x) => x.toJson())),
      };
}

class Image {
  Image({
    required this.id,
    required this.name,
    required this.type,
    required this.url,
    required this.order,
    required this.variations,
  });

  final String id;
  final String name;
  final int type;
  final String url;
  final int order;
  final Variations variations;

  factory Image.fromJson(Map<String, dynamic> json) => Image(
        id: json["id"],
        name: json["name"],
        type: json["type"],
        url: json["url"],
        order: json["order"],
        variations: Variations.fromJson(json["variations"]),
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "name": name,
        "type": type,
        "url": url,
        "order": order,
        "variations": variations.toJson(),
      };
}

class Variations {
  Variations({
    required this.original,
    required this.sm,
    required this.md,
    required this.lg,
  });

  final String original;
  final String sm;
  final String md;
  final String lg;

  factory Variations.fromJson(Map<String, dynamic> json) => Variations(
        original: json["original"],
        sm: json["sm"],
        md: json["md"],
        lg: json["lg"],
      );

  Map<String, dynamic> toJson() => {
        "original": original,
        "sm": sm,
        "md": md,
        "lg": lg,
      };
}

class Meta {
  Meta({
    required this.title,
    required this.description,
    required this.images,
  });

  final String title;
  final String description;
  final List<dynamic> images;

  factory Meta.fromJson(Map<String, dynamic> json) => Meta(
        title: json["title"],
        description: json["description"],
        images: List<dynamic>.from(json["images"].map((x) => x)),
      );

  Map<String, dynamic> toJson() => {
        "title": title,
        "description": description,
        "images": List<dynamic>.from(images.map((x) => x)),
      };
}

class VariantOption {
  VariantOption({
    required this.name,
    required this.type,
    required this.values,
  });

  final String name;
  final int type;
  final List<String> values;

  factory VariantOption.fromJson(Map<String, dynamic> json) => VariantOption(
        name: json["name"],
        type: json["type"],
        values: List<String>.from(json["values"].map((x) => x)),
      );

  Map<String, dynamic> toJson() => {
        "name": name,
        "type": type,
        "values": List<dynamic>.from(values.map((x) => x)),
      };
}